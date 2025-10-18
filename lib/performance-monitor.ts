/**
 * Performance monitoring utilities for the Expense Tracker Pro application
 */

interface PerformanceMetrics {
  operation: string;
  duration: number;
  timestamp: Date;
  metadata?: Record<string, any>;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private isEnabled: boolean;

  constructor() {
    this.isEnabled = process.env.NODE_ENV === 'development' || 
                    process.env.ENABLE_PERFORMANCE_MONITORING === 'true';
  }

  /**
   * Measure the execution time of an async function
   */
  async measureAsync<T>(
    operation: string,
    fn: () => Promise<T>,
    metadata?: Record<string, any>
  ): Promise<T> {
    if (!this.isEnabled) {
      return fn();
    }

    const start = performance.now();
    try {
      const result = await fn();
      const duration = performance.now() - start;
      
      this.recordMetric({
        operation,
        duration,
        timestamp: new Date(),
        metadata,
      });

      return result;
    } catch (error) {
      const duration = performance.now() - start;
      
      this.recordMetric({
        operation,
        duration,
        timestamp: new Date(),
        metadata: { ...metadata, error: error instanceof Error ? error.message : 'Unknown error' },
      });

      throw error;
    }
  }

  /**
   * Measure the execution time of a synchronous function
   */
  measureSync<T>(
    operation: string,
    fn: () => T,
    metadata?: Record<string, any>
  ): T {
    if (!this.isEnabled) {
      return fn();
    }

    const start = performance.now();
    try {
      const result = fn();
      const duration = performance.now() - start;
      
      this.recordMetric({
        operation,
        duration,
        timestamp: new Date(),
        metadata,
      });

      return result;
    } catch (error) {
      const duration = performance.now() - start;
      
      this.recordMetric({
        operation,
        duration,
        timestamp: new Date(),
        metadata: { ...metadata, error: error instanceof Error ? error.message : 'Unknown error' },
      });

      throw error;
    }
  }

  /**
   * Record a performance metric
   */
  recordMetric(metric: PerformanceMetrics) {
    this.metrics.push(metric);
    
    // Log slow operations in development
    if (process.env.NODE_ENV === 'development' && metric.duration > 1000) {
      console.warn(`Slow operation detected: ${metric.operation} took ${metric.duration.toFixed(2)}ms`, metric.metadata);
    }

    // Keep only last 1000 metrics to prevent memory leaks
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-1000);
    }
  }

  /**
   * Get performance statistics
   */
  getStats(operation?: string) {
    const filteredMetrics = operation 
      ? this.metrics.filter(m => m.operation === operation)
      : this.metrics;

    if (filteredMetrics.length === 0) {
      return null;
    }

    const durations = filteredMetrics.map(m => m.duration);
    const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;
    const minDuration = Math.min(...durations);
    const maxDuration = Math.max(...durations);

    return {
      operation: operation || 'all',
      count: filteredMetrics.length,
      avgDuration: Math.round(avgDuration * 100) / 100,
      minDuration: Math.round(minDuration * 100) / 100,
      maxDuration: Math.round(maxDuration * 100) / 100,
      totalDuration: Math.round(durations.reduce((a, b) => a + b, 0) * 100) / 100,
    };
  }

  /**
   * Get all metrics
   */
  getMetrics() {
    return [...this.metrics];
  }

  /**
   * Clear all metrics
   */
  clear() {
    this.metrics = [];
  }
}

// Global performance monitor instance
export const performanceMonitor = new PerformanceMonitor();

/**
 * Decorator for measuring function performance
 */
export function measurePerformance(operation: string, metadata?: Record<string, any>) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      return performanceMonitor.measureAsync(
        `${target.constructor.name}.${propertyName}`,
        () => method.apply(this, args),
        { ...metadata, args: args.length }
      );
    };

    return descriptor;
  };
}

/**
 * React hook for measuring component render performance
 */
export function useRenderPerformance(componentName: string) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    const start = performance.now();
    
    return () => {
      const duration = performance.now() - start;
      performanceMonitor.recordMetric({
        operation: `render.${componentName}`,
        duration,
        timestamp: new Date(),
      });
    };
  }
  
  return () => {};
}

/**
 * Database query performance wrapper
 */
export async function measureDatabaseQuery<T>(
  queryName: string,
  queryFn: () => Promise<T>,
  metadata?: Record<string, any>
): Promise<T> {
  return performanceMonitor.measureAsync(
    `database.${queryName}`,
    queryFn,
    metadata
  );
}

/**
 * API route performance wrapper
 */
export async function measureApiRoute<T>(
  routeName: string,
  handler: () => Promise<T>,
  metadata?: Record<string, any>
): Promise<T> {
  return performanceMonitor.measureAsync(
    `api.${routeName}`,
    handler,
    metadata
  );
}
