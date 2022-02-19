import { Component, OnInit } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';
import {  ToastrService } from 'ngx-toastr';

const URL = 'http://localhost:3000/upload/upload';

@Component({
  selector: 'app-uploadvideo',
  templateUrl: './uploadvideo.component.html',
  styleUrls: ['./uploadvideo.component.scss']
})
export class UploadvideoComponent implements OnInit {

  item:any;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) =>{
    file.withCredentials = false;
    this.item=file._file.name;
    localStorage.setItem('uploadvideo',this.item);
console.log(localStorage.getItem('uploadvideo'))
    }
  ;
  this.uploader.onCompleteItem = (item: any, status: any) =>{
    console.log('Uploaded File Details:', item);

    localStorage.setItem('uploadvideo',this.item);
    this.toastr.success('Fichier telecharger!');

  };
  ;    };
  }

