import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeradordesenhaComponent } from "./pages/geradordesenha/geradordesenha.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeradordesenhaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GereadorDeSenha';
}
