#!/bin/bash

echo "🔍 Диагностика аутентификации Expense Tracker"
echo "=============================================="

# Проверяем, что сервер работает
echo "1. Проверка сервера..."
if curl -s http://localhost:3000 > /dev/null; then
  echo "✅ Сервер работает на http://localhost:3000"
else
  echo "❌ Сервер не отвечает"
  exit 1
fi

# Проверяем CSRF токен
echo "2. Проверка CSRF токена..."
CSRF_RESPONSE=$(curl -s http://localhost:3000/api/auth/csrf)
if echo "$CSRF_RESPONSE" | grep -q "csrfToken"; then
  echo "✅ CSRF токен получен"
  CSRF_TOKEN=$(echo "$CSRF_RESPONSE" | jq -r .csrfToken)
else
  echo "❌ Не удалось получить CSRF токен"
  exit 1
fi

# Проверяем сессию
echo "3. Проверка текущей сессии..."
SESSION_RESPONSE=$(curl -s http://localhost:3000/api/auth/session)
if echo "$SESSION_RESPONSE" | grep -q "user"; then
  echo "✅ Пользователь уже аутентифицирован"
  echo "$SESSION_RESPONSE" | jq .
else
  echo "ℹ️  Пользователь не аутентифицирован"
fi

# Проверяем провайдеров
echo "4. Проверка провайдеров аутентификации..."
PROVIDERS_RESPONSE=$(curl -s http://localhost:3000/api/auth/providers)
if echo "$PROVIDERS_RESPONSE" | grep -q "credentials"; then
  echo "✅ Провайдер credentials настроен"
else
  echo "❌ Провайдер credentials не найден"
fi

echo ""
echo "📋 Инструкции для тестирования:"
echo "1. Откройте браузер: http://localhost:3000/login"
echo "2. Введите email: test@test.com"
echo "3. Введите пароль: password"
echo "4. Нажмите 'Sign in'"
echo ""
echo "Если вход не работает, проверьте логи сервера в терминале."
