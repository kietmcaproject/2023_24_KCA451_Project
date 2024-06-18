import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as XLSX from "xlsx";
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {


fileData:any;
show_table = false;
buttonType = 'edit';
editable = true;
onFileChange(evt: any) {
  const target: DataTransfer = <DataTransfer>(evt.target);

  if (target.files.length > 1) {
    alert('Multiple files are not allowed');
    return;
  }
  else {
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      let data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

      // Print the Excel Data
      console.log(data);
      this.fileData = data;

      this.show_table = true;

    }
    reader.readAsBinaryString(target.files[0]);
  }

}
edit(event:any,indexOfrow:any){
  this.editable = false;
  this.buttonType = 'update';
  let edit_button = (<HTMLInputElement>document.getElementById('edit'+indexOfrow))
  let update_button = (<HTMLInputElement>document.getElementById('update'+indexOfrow))
  edit_button.style.display = "none";
  update_button.style.display = "block";
  console.log(edit_button);
}
//setter function for view child 
  update(event:any,indexOfrow:any){
    this.buttonType = 'update';
    this.editable = true;
    let edit_button = (<HTMLInputElement>document.getElementById('edit'+indexOfrow))
    let update_button = (<HTMLInputElement>document.getElementById('update'+indexOfrow))
    console.log(edit_button);
    console.log(update_button);
    edit_button.style.display = "block";
    update_button.style.display = "none";
  }
}
