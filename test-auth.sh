#!/bin/bash

echo "🧪 Тестирование аутентификации Expense Tracker"
echo "=============================================="

# Получаем CSRF токен
echo "1. Получение CSRF токена..."
CSRF_TOKEN=$(curl -s http://localhost:3000/api/auth/csrf | jq -r .csrfToken)
echo "✅ CSRF токен получен: ${CSRF_TOKEN:0:20}..."

# Регистрируем пользователя
echo "2. Регистрация пользователя test@test.com..."
REGISTER_RESPONSE=$(curl -s -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"password"}')

if echo "$REGISTER_RESPONSE" | grep -q "User created successfully"; then
  echo "✅ Пользователь успешно зарегистрирован"
else
  echo "⚠️  Пользователь уже существует или ошибка регистрации"
fi

# Тестируем вход через NextAuth
echo "3. Тестирование входа через NextAuth..."
LOGIN_RESPONSE=$(curl -s -X POST http://localhost:3000/api/auth/callback/credentials \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "email=test@test.com&password=password&csrfToken=$CSRF_TOKEN" \
  -c cookies.txt)

if echo "$LOGIN_RESPONSE" | grep -q "302"; then
  echo "✅ Вход выполнен успешно (редирект 302)"
else
  echo "❌ Ошибка входа"
fi

# Проверяем сессию
echo "4. Проверка сессии..."
SESSION_RESPONSE=$(curl -s http://localhost:3000/api/auth/session -b cookies.txt)
if echo "$SESSION_RESPONSE" | grep -q "test@test.com"; then
  echo "✅ Сессия активна, пользователь аутентифицирован"
else
  echo "❌ Сессия не найдена"
fi

echo ""
echo "🎉 Тестирование завершено!"
echo ""
echo "Теперь вы можете:"
echo "1. Открыть http://localhost:3000 в браузере"
echo "2. Нажать 'Sign In'"
echo "3. Войти с данными: test@test.com / password"
echo "4. Или зарегистрировать нового пользователя"
