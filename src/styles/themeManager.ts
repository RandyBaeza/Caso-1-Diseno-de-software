export class ThemeManager {
  private currentTheme: 'light' | 'dark' = 'light';

  setTheme(theme: 'light' | 'dark') {
	this.currentTheme = theme;
	document.documentElement.setAttribute('data-theme', theme);
	localStorage.setItem('theme', theme);
  }

  getTheme(): 'light' | 'dark' {
	const saved = localStorage.getItem('theme') as 'light' | 'dark';
	return saved || this.currentTheme;
  }

  toggleTheme() {
	const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
	this.setTheme(newTheme);
  }

  // Apply theme to specific component
  applyComponentTheme(componentId: string, theme: 'light' | 'dark') {
	const element = document.getElementById(componentId);
	if (element) {
	  element.setAttribute('data-theme', theme);
	}
  }
}

export const themeManager = new ThemeManager();