import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-uploadzip',
  templateUrl: './uploadzip.component.html',
  styleUrls: ['./uploadzip.component.css']
})
export class UploadzipComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  fileInfos?: Observable<any>;
  fileName?: String;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.fileInfos;
    
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  download(fileName: string): void {

    this.uploadService.download(fileName).subscribe(
      (data => {
        
        const blob = new Blob([data], {
          type: 'application/zip',
        });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
        this.message = 'download realizado com sucesso!';
      }));

  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.uploadZip(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = event.body;
              alert('upload realizado com sucesso!');
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          });

      }

      this.selectedFiles = undefined;
    }
  }
}
