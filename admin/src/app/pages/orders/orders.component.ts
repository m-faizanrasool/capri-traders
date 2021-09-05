import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
	selectedTab = 0;

	links = ['pending', 'accepted', 'picked', 'delivered', 'cancelled'];
	activeLink = this.links[0];
	constructor(private router: Router) {}

	ngOnInit(): void {
		this.open(this.activeLink);
	}

	open(status) {
		this.router.navigate([`/orders/${status}`]);
	}
}
