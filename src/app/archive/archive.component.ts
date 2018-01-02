import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  archiveHeader: string;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let year = this.activatedRoute.snapshot.paramMap.get('year');
    let month = this.activatedRoute.snapshot.paramMap.get('month');
    this.archiveHeader = year + '/' + month;
  }

  BackToHomePage(){
    this.route.navigate(['']);
  }

}