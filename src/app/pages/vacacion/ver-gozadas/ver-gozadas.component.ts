import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { VacacionGozada } from '../../../models/vacacion-gozada';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { VacacionService } from '../../../services/vacacion.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-gozadas',
  templateUrl: './ver-gozadas.component.html',
  styleUrls: ['./ver-gozadas.component.css']
})
export class VerGozadasComponent implements OnInit {

  gozadas: VacacionGozada[] = [];

  displayedColumns: string[] = [ 'periodo','desde','hasta', 'dias'];
  dataSource!: MatTableDataSource<VacacionGozada>;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private vacacionService:VacacionService,
    public dialogRef: MatDialogRef<VerGozadasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
    this.load();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private load(){
    let usuario = sessionStorage.getItem("usuario")!;
    this.vacacionService.getVacacionesGozadas(usuario,this.data).subscribe(data => {
      let ganadas = JSON.parse(JSON.stringify(data));
      this.dataSource = new MatTableDataSource(ganadas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
