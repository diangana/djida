import { Component, Input, OnInit, Output } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';

const URL = 'http://localhost:3000/upload/upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
item:any;
photo:any
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.photo=localStorage.getItem('upload');

    this.uploader.onAfterAddingFile = (file) =>{
    file.withCredentials = false;
    this.item=file._file.name;
    localStorage.setItem('upload',this.item);
console.log(localStorage.getItem('upload'));
    }
  ;
  this.uploader.onCompleteItem = (item: any, status: any) =>{
    console.log('Uploaded File Details:', item);

    localStorage.setItem('upload',this.item);
    this.toastr.success('Fichier telecharger!');

  };
  ;    };
  }
