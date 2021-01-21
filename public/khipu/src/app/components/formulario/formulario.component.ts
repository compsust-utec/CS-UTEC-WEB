import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { FormKhipu } from 'src/app/core/model/forms';
import { FormsService } from 'src/app/core/services/forms.service';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formGroup!: FormGroup;

  private baseUrl: string = environment.baseUrl;

  constructor(private fb: FormBuilder, private formService: FormsService) {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('.{2,}')]],
      summary: ['', [Validators.required, Validators.pattern('.{2,}')]],
      objectives: ['', [Validators.required]],
      type: ['educativo', [Validators.required]],
      starts: ['', [Validators.required]],
      ends: ['', [Validators.required]],
      principal: this.addMembers(),
      members: this.fb.array([]),
      softwares: this.fb.array([this.addSoftwares()]),
    });
  }

  toJSON(): FormKhipu {
    let members = [
      {
        users: {
          email: this.formGroup.value.principal.email,
          name: this.formGroup.value.principal.nombre,
          username: this.formGroup.value.principal.email.split('@')[0],
          type: 'RESEARCHER',
        },
        isPrincipalResearcher: true,
      },
    ];
    this.memberArray.controls.forEach((element) => {
      members.push({
        users: {
          email: element.value.email,
          name: element.value.nombre,
          username: element.value.email.split('@')[0],
          type: this.projectType == 'educativo' ? 'USUARIO' : 'RESEARCHER',
        },
        isPrincipalResearcher: false,
      });
    });
    return {
      name: this.formGroup.value.name,
      start: this.formatDate(this.formGroup.value.starts),
      ends: this.formatDate(this.formGroup.value.ends),
      members: members,
      softwares: this.softwareArray.controls.map((element) => {
        return {
          name: element.value.name,
          license: element.value.license,
        };
      }),
      summary: this.formGroup.value.summary,
      objectives: this.formGroup.value.objectives,
      type: this.projectType,
    };
  }

  formatDate(dateString: string) {
    return moment(dateString).format('YYYY-MM-DD');
  }

  addMembers(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required, Validators.pattern('.{2,}')]],
    });
  }

  addSoftwares(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.pattern('.{3,}')]],
      license: ['true', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  get projectType(): string {
    return this.formGroup.controls['type'].value;
  }

  get memberArray(): FormArray {
    return this.formGroup.get('members') as FormArray;
  }

  get softwareArray(): FormArray {
    return this.formGroup.get('softwares') as FormArray;
  }

  addMember() {
    console.log(this.memberArray);
    this.memberArray.push(this.addMembers());
  }

  removeMember() {
    console.log(this.memberArray);
    this.memberArray.removeAt(this.memberArray.length - 1);
  }

  addSoftware() {
    console.log(this.softwareArray);
    this.softwareArray.push(this.addSoftwares());
  }

  removeSoftware() {
    console.log(this.softwareArray);
    this.softwareArray.removeAt(this.softwareArray.length - 1);
  }

  changeProjectType() {
    this.memberArray.clear();
  }

  enviar() {
    console.log(this.toJSON());
    if (!this.formGroup.invalid) {
      this.formService.enviar(this.toJSON()).subscribe(
        (response: any) => {
          console.log(response);
          Swal.fire({
            titleText: 'Registro enviado!',
            html:
              'Se le enviará un correo a cada persona registrada con sus credenciales de acceso.',
            allowOutsideClick: true,
            icon: 'success',
            showConfirmButton: true,
          }).then();
        },
        (error: any) => {
          console.log(error);
          Swal.fire({
            titleText: 'Oops!',
            html:
              'Parece que el servidor está ocupado o caído en este momento, por favor intenta más tarde.',
            allowOutsideClick: true,
            icon: 'error',
            showConfirmButton: true,
          });
        }
      );
    } else {
      Swal.fire({
        titleText: 'Oops!',
        html: 'Debes completar los campos obligatorios faltantes',
        allowOutsideClick: true,
        icon: 'error',
        showConfirmButton: true,
      });
    }
  }
}
