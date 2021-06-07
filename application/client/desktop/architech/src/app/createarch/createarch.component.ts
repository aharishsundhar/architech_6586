import { Component, OnInit } from '@angular/core';
import { CreatearchService } from './createarch.service';

@Component({
  selector: 'app-createarch',
  templateUrl: './createarch.component.html',
  styleUrls: ['./createarch.component.scss'],
})

export class CreatearchComponent implements OnInit {
    public test = {
        name: '',
    }

    constructor (
        private createarchService: CreatearchService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createarchService.GpCreate(this.test).subscribe(data => {
            this.test.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}