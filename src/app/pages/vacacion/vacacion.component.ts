import { VacacionGanada } from './../../models/vacacion-ganada';
import { Component, OnInit, ViewChild } from '@angular/core';
import { VacacionGozada } from '../../models/vacacion-gozada';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { VacacionService } from '../../services/vacacion.service';
import { MatDialog } from '@angular/material/dialog';
import { VerGozadasComponent } from './ver-gozadas/ver-gozadas.component';

@Component({
  selector: 'app-vacacion',
  templateUrl: './vacacion.component.html',
  styleUrls: ['./vacacion.component.css']
})
export class VacacionComponent implements OnInit {

  ganadas: VacacionGanada[] = [];

  displayedColumns: string[] = [ 'periodo', 'dias','saldo','accion'];
  dataSource!: MatTableDataSource<VacacionGanada>;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private vacacionService:VacacionService,
    public dialog:MatDialog) { }

  ngOnInit(): void {
    this.load();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private load(){
    let usuario = sessionStorage.getItem("usuario")!;
    this.vacacionService.getVacacionesGanadas(usuario).subscribe(data => {
      let ganadas = JSON.parse(JSON.stringify(data));
      this.dataSource = new MatTableDataSource(ganadas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  openDialog(periodo:string): void {
    const dialogRef = this.dialog.open(VerGozadasComponent, {
      width: '700px',
      data:periodo
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
