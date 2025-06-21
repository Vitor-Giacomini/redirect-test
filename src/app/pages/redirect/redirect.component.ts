import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartnersService } from '../../services/partners.service';

@Component({
  selector: 'app-redirect',
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.scss'
})
export class RedirectComponent implements OnInit {

  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);
  readonly #partnerService = inject(PartnersService);

  ngOnInit(): void {
    setTimeout(() => {
      this.handleRedirect();
    }, 2500);
  }

  handleRedirect() {
    this.#route.params.subscribe(params => {
      const partnerCode = params['partnerCode'];
      let redirectUrl = null;

      if(partnerCode) {
        redirectUrl = this.#partnerService.getPartnerRedirect(partnerCode);
      }

      if(!partnerCode || !redirectUrl) {
        this.#router.navigate(['error']);
      } else {
        window.location.href= redirectUrl;
      }
    })
  }
}
