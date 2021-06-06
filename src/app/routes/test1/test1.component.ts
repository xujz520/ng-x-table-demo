import { Component, OnInit, ViewChild } from '@angular/core';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  searchParams: any = {};

  @ViewChild('baseTable', { static: true }) baseTable = null;
  columns: XTableColumns = [
    { title: '学号', field: 'no', fixed: 'left' },
    { title: '姓名', field: 'name', fixed: 'left' },
    { title: '性别', field: 'sex' },
    { title: '年龄', field: (rowData) => `${rowData.age}岁`  },
    { title: '学院', field: 'college' },
    { title: '专业', field: 'major' },
    { title: '班级', field: (rowData) => `<strong>${rowData.class}</strong>班`  },
    { title: '入学时间', field: 'entranceTime', pipe: "date" },
    { title: '奖学金', field: 'scholarship', pipe: "currency", align: 'right' },
    { title: '社团', field: 'club' },
    { title: '备注', field: (rowData) => rowData.remark },
    { title: '操作项', field: '#btn', fixed: 'right', toggleCheckbox: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
