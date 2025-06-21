import { Injectable } from '@angular/core';
import { Partner } from '../models/partner.model';

@Injectable({
    providedIn: 'root'
})
export class PartnersService {

    private partners = [
        {
            code: 'burgerking',
            redirectUrl: 'https://www.burgerking.com.br/',
            isActive: true
        },
        {
            code: 'mcdonalds',
            redirectUrl: 'https://www.mcdonalds.com.br/',
            isActive: false
        },
        {
            code: 'amazon',
            redirectUrl: 'https://www.amazon.com.br/',
            isActive: false
        },
        {
            code: 'google',
            redirectUrl: 'https://www.google.com/',
            isActive: true
        }
    ]

    getPartners(): Partner[] {
        return this.partners;
    }

    isPartnerActive(name: string): boolean {
        const partner = this.partners.find(p => p.code === name.toLowerCase());
        console.log('Retornou ' +  partner ? partner!.isActive === true : false);
        
        return partner ? partner.isActive === true : false;
    }

    getPartnerRedirect(name: string): string | null {
        const partner = this.partners.find(p => p.code === name);
        return partner?.isActive
        ? partner.redirectUrl
        : null
    }

    togglePartnerStatus(name: string, isActive: boolean): void {
        const partner = this.partners.find(p => p.code === name);
        if (partner) {
            partner.isActive = isActive;
        }
    }
}