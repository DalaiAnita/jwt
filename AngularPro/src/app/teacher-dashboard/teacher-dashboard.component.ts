import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import {TeacherModal} from './teacher-modal'
@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {
  teacherListData: any = [];
  teacherForm!: FormGroup;
  teacherModelobj:TeacherModal = new TeacherModal()
  editData: any;
  constructor(
    private api: ApiService,
     private fb: FormBuilder,
     private toast:ToastrService
     ) { }

  ngOnInit(): void {
    this.teacherForm = this.fb.group({
      teacherId :['',Validators.required],
      teacherName: ['', Validators.required],
      subject: ['', Validators.required],
      experience: ['', Validators.required]
    })
    this.getTeacherData();
  }
  getTeacherData() {
    this.api.getTeacherData().subscribe(data => {
      this.teacherListData = data;
    })
  }
  addTeacherData() {
      this.teacherModelobj.name = this.teacherForm.value.teacherName,
      this.teacherModelobj.subject = this.teacherForm.value.subject,
      this.teacherModelobj.experience = this.teacherForm.value.experience
      this.api.addTeacherData(this.teacherModelobj).subscribe(data => {
      this.toast.success('Data Added Successfully!!');
      let cancelRef = document.getElementById('cancel');
      cancelRef?.click();
      this.getTeacherData();
    })
  }
  editTeacherData(rowData:TeacherModal){
    this.editData = rowData ;
    this.teacherForm.controls['teacherName'].setValue(rowData.name);
    this.teacherForm.controls['subject'].setValue(rowData.subject);
    this.teacherForm.controls['experience'].setValue(rowData.experience);
  }
  updateTeacherData(){
    this.teacherModelobj.teacherId =  this.editData.teacherId;
    this.teacherModelobj.name = this.teacherForm.value.teacherName;
    this.teacherModelobj.subject =  this.teacherForm.value.subject;
    this.teacherModelobj.experience = this.teacherForm.value.experience;
    this.api.updateTeacherData(this.teacherModelobj).subscribe(data=>{
      console.log('data',data)
    alert('Teacher Data Updated Successfully!!!');
    this.getTeacherData();
    let cancelRef = document.getElementById('cancel');
    cancelRef?.click();
    });

  }
  deleteTeacherData(row:TeacherModal){
    this.api.deleteTeacherData(row.teacherId).subscribe(data=>{
      alert('Data Deleted Successfully!!');
      this.getTeacherData();
    })
  }
}
