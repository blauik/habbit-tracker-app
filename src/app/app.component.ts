import { Component } from '@angular/core';

interface TableRow {
  checked: boolean;
  dateString: string;
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number = 0;
  date = '';
  rows: TableRow[] = [];

  generateTable() {
    let number = this.number;
    const startDate = new Date(this.date);

    this.rows = [];
    for (let i = 0; i < 365; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const dateString = date.toISOString().slice(0, 10);

      this.rows.push({
        checked: false,
        dateString: dateString,
        value: number
      });

      number += number * 0.01;
    }
  }
}
