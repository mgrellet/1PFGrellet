import {Component} from '@angular/core';
import {Student} from "../../model/student";
import {MatTableDataSource} from "@angular/material/table";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent {

  constructor(private _snackBar: MatSnackBar) {
  }

  students: Student[] = [
    {
      id: 1,
      firstName: 'Martin',
      lastName: 'Grellet',
      course: 'Angular',
      email: 'martin@test.com',
      startDate: new Date(2023, 0, 1),
    },
    {
      id: 2,
      firstName: 'Enzo',
      lastName: 'Fernandez',
      course: 'Angular',
      email: 'enzo@test.com',
      startDate: new Date(2023, 2, 2),
    },
    {
      id: 3,
      firstName: 'Julian',
      lastName: 'Alvarez',
      course: 'ReactJS',
      email: 'julian@test.com',
      startDate: new Date(),
    }
  ]

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>(this.students);
  displayedColumns: string[] = ['name', 'email', 'course', 'startDate', 'actions'];

  editStudent(element: Student) {
    this._snackBar.open('Editar Estudiante (funcionalidad no soportada)', '', {
      duration: 3000
    });
  }

  deleteStudent(id: number) {
    this._snackBar.open('Eliminar Estudiante (funcionalidad no soportada)', '', {
      duration: 3000
    });
  }
}
