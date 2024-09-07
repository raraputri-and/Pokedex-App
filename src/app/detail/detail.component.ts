import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  pokemon: any;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
    ) {}

  ngOnInit(): void {    
    this.id = this.route.snapshot.paramMap.get('id')
    this.getDetail(this.id);
  }

  getDetail(id: any) {
    this.dataService.getById(id).subscribe((pokemonDetail: any) => {
      this.pokemon = pokemonDetail
    })
  }

}
