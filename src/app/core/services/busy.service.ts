import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
// Contador reactivo de requests en curso
  private busyCount = signal(0);

  // Señal derivada para el estado de carga
  readonly loading = computed(() => this.busyCount() > 0);

  busy(timeoutMs: number = 2000) {
    this.busyCount.update(c => c + 1);

    // Tiempo máximo de visibilidad (opcional)
    const timerId = setTimeout(() => this.idle(), timeoutMs);
    return () => clearTimeout(timerId); // por si quieres cancelar el auto-idle
  }

  idle() {
    this.busyCount.update(c => Math.max(0, c - 1));
  }
}
