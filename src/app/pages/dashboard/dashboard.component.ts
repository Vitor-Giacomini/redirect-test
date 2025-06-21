import { Component, inject, OnInit, signal } from '@angular/core';
import { PartnersService } from '../../services/partners.service';
import { Partner } from '../../models/partner.model';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  readonly #partnerService = inject(PartnersService);
  partners!: Partner[];

  ngOnInit(): void {
    this.partners = this.#partnerService.getPartners();
  }

  togglePartnerStatus(isActive: any, code: string): void {
    console.log(`Toggling status for partner ${code} to ${isActive}`);
    
    this.#partnerService.togglePartnerStatus(code, isActive);
    this.partners = this.#partnerService.getPartners();
  }
}
