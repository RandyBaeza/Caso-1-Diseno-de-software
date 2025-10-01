export class Logger {
  private logLevel: 'debug' | 'info' | 'warn' | 'error' = 'info';

  setLogLevel(level: 'debug' | 'info' | 'warn' | 'error') {
	this.logLevel = level;
  }

  debug(message: string, data?: any) {
	if (this.shouldLog('debug')) {
	  console.debug(`[DEBUG] ${message}`, data);
	}
  }

  info(message: string, data?: any) {
	if (this.shouldLog('info')) {
	  console.info(`[INFO] ${message}`, data);
	}
  }

  warn(message: string, data?: any) {
	if (this.shouldLog('warn')) {
	  console.warn(`[WARN] ${message}`, data);
	}
  }

  error(message: string, data?: any) {
	if (this.shouldLog('error')) {
	  console.error(`[ERROR] ${message}`, data);
	}
  }

  private shouldLog(level: string): boolean {
	const levels = ['debug', 'info', 'warn', 'error'];
	return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }
}

export const logger = new Logger();