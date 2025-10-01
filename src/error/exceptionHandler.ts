import { useLogMiddleware } from '../middleware/logMiddleware';

export class ExceptionHandler {
  private log = useLogMiddleware();

  handle(error: Error, context: string, severity: 'low' | 'medium' | 'high' = 'medium') {
	this.log.logEvent('exception_occurred', {
	  error: error.message,
	  context,
	  severity,
	  stack: error.stack
	});

	// Different handling based on severity
	switch (severity) {
	  case 'high':
		this.handleCriticalError(error, context);
		break;
	  case 'medium':
		this.handleRecoverableError(error, context);
		break;
	  case 'low':
		this.handleMinorError(error, context);
		break;
	}
  }

  private handleCriticalError(error: Error, context: string) {
	// Show error page or restart app
	console.error('Critical error:', error);
  }

  private handleRecoverableError(error: Error, context: string) {
	// Show user-friendly message
	console.warn('Recoverable error:', error);
  }

  private handleMinorError(error: Error, context: string) {
	// Just log it
	console.info('Minor error:', error);
  }
}

export const exceptionHandler = new ExceptionHandler();