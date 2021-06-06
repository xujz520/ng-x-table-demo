import { Component, OnInit, ViewChild } from '@angular/core';

import { XTableColumns } from '@ng-dms/x-table';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  data = [
    { "id": 1, "no": 7107320614, "name": "冯敏", "sex": 0, "age": 29, "college": "物联网工程学院", "major": "人工智能", "class": 3, "scholarship": 18097, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 1490608683000, "club": ["民乐", "摄影", "骑行"] },
    { "id": 2, "no": 7107320615, "name": "熊霞", "sex": 0, "age": 24, "college": "外语外贸学院", "major": "国际邮轮乘务管理", "class": 3, "scholarship": 9288, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 1461558145000, "club": ["民乐", "摄影", "骑行"] }, { "id": 3, "no": 7107320616, "name": "谭丽", "sex": 1, "age": 22, "college": "土木工程学院", "major": "建筑工程技术", "class": 1, "scholarship": 16026, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 1235331013000, "club": ["民乐"] },
    { "id": 4, "no": 7107320617, "name": "曾刚", "sex": 1, "age": 20, "college": "外语外贸学院", "major": "国际邮轮乘务管理", "class": 3, "scholarship": 15123, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 105333448000, "club": ["民乐", "摄影", "骑行"] }, { "id": 5, "no": 7107320618, "name": "何磊", "sex": 1, "age": 21, "college": "外语外贸学院", "major": "国际贸易实务", "class": 4, "scholarship": 15150, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 856445712000, "club": ["民乐"] },
    { "id": 6, "no": 7107320619, "name": "任超", "sex": 0, "age": 30, "college": "土木工程学院", "major": "建筑工程技术", "class": 4, "scholarship": 14386, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 1392424433000, "club": ["民乐", "摄影", "骑行"] },
    { "id": 7, "no": 7107320620, "name": "贾秀英", "sex": 1, "age": 22, "college": "土木工程学院", "major": "工程造价", "class": 5, "scholarship": 15545, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 1467818463000, "club": ["民乐"] },
    { "id": 8, "no": 7107320621, "name": "冯涛", "sex": 1, "age": 19, "college": "外语外贸学院", "major": "国际贸易实务", "class": 2, "scholarship": 17907, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 1131353467000, "club": ["民乐", "摄影"] },
    { "id": 9, "no": 7107320622, "name": "余秀兰", "sex": 1, "age": 28, "college": "物联网工程学院", "major": "网络工程", "class": 2, "scholarship": 18279, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 233870768000, "club": [] },
    { "id": 10, "no": 7107320623, "name": "程磊", "sex": 1, "age": 20, "college": "外语外贸学院", "major": "国际贸易实务", "class": 4, "scholarship": 11683, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 398043730000, "club": ["民乐"] },
    { "id": 11, "no": 7107320624, "name": "张平", "sex": 1, "age": 19, "college": "土木工程学院", "major": "建筑工程技术", "class": 2, "scholarship": 9329, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 800790514000, "club": ["民乐", "摄影", "骑行"] },
    { "id": 12, "no": 7107320625, "name": "尹杰", "sex": 1, "age": 26, "college": "外语外贸学院", "major": "国际贸易实务", "class": 2, "scholarship": 13565, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 154639319000, "club": ["民乐", "摄影", "骑行"] },
    { "id": 13, "no": 7107320626, "name": "谭娜", "sex": 1, "age": 29, "college": "外语外贸学院", "major": "国际邮轮乘务管理", "class": 2, "scholarship": 12826, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 1514413585000, "club": ["民乐", "摄影"] },
    { "id": 14, "no": 7107320627, "name": "史平", "sex": 0, "age": 23, "college": "土木工程学院", "major": "建筑工程技术", "class": 4, "scholarship": 14781, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 849548082000, "club": ["民乐", "摄影"] },
    { "id": 15, "no": 7107320628, "name": "易娟", "sex": 0, "age": 28, "college": "土木工程学院", "major": "建筑工程技术", "class": 1, "scholarship": 13889, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 415550960000, "club": [] },
    { "id": 16, "no": 7107320629, "name": "姜磊", "sex": 0, "age": 20, "college": "土木工程学院", "major": "工程造价", "class": 3, "scholarship": 19834, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 1413337474000, "club": ["民乐"] },
    { "id": 17, "no": 7107320630, "name": "万娟", "sex": 1, "age": 30, "college": "外语外贸学院", "major": "国际贸易实务", "class": 3, "scholarship": 13154, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 582253248000, "club": ["民乐", "摄影"] },
    { "id": 18, "no": 7107320631, "name": "董磊", "sex": 1, "age": 28, "college": "物联网工程学院", "major": "人工智能", "class": 3, "scholarship": 19358, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 107199834000, "club": ["民乐", "摄影"] },
    { "id": 19, "no": 7107320632, "name": "雷敏", "sex": 0, "age": 27, "college": "物联网工程学院", "major": "网络工程", "class": 2, "scholarship": 12886, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 1150039814000, "club": ["民乐"] },
    { "id": 20, "no": 7107320633, "name": "范勇", "sex": 1, "age": 26, "college": "外语外贸学院", "major": "国际贸易实务", "class": 2, "scholarship": 18465, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 208936045000, "club": ["民乐", "摄影"] },
    { "id": 21, "no": 7107320634, "name": "孔涛", "sex": 0, "age": 22, "college": "土木工程学院", "major": "工程造价管理", "class": 4, "scholarship": 16327, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 1111902464000, "club": [] },
    { "id": 22, "no": 7107320635, "name": "孔洋", "sex": 1, "age": 27, "college": "外语外贸学院", "major": "国际贸易实务", "class": 4, "scholarship": 11554, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 1398903429000, "club": ["民乐"] },
    { "id": 23, "no": 7107320636, "name": "白秀兰", "sex": 1, "age": 22, "college": "物联网工程学院", "major": "软件工程", "class": 2, "scholarship": 11415, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 1192622178000, "club": ["民乐", "摄影", "骑行"] }, { "id": 24, "no": 7107320637, "name": "钱军", "sex": 1, "age": 19, "college": "土木工程学院", "major": "建筑工程技术", "class": 1, "scholarship": 15483, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 438131130000, "club": [] },
    { "id": 25, "no": 7107320638, "name": "宋伟", "sex": 1, "age": 28, "college": "外语外贸学院", "major": "国际邮轮乘务管理", "class": 3, "scholarship": 9311, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 704715870000, "club": ["民乐"] },
    { "id": 26, "no": 7107320639, "name": "贺刚", "sex": 0, "age": 21, "college": "物联网工程学院", "major": "网络工程", "class": 1, "scholarship": 14759, "remark": "<mark>HTML</mark><em>备注</em>", "status": 1, "entranceTime": 50745958000, "club": ["民乐"] },
    { "id": 27, "no": 7107320640, "name": "卢杰", "sex": 1, "age": 28, "college": "外语外贸学院", "major": "国际贸易实务", "class": 2, "scholarship": 12591, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 411898348000, "club": ["民乐"] },
    { "id": 28, "no": 7107320641, "name": "曾勇", "sex": 1, "age": 20, "college": "外语外贸学院", "major": "商务英语", "class": 4, "scholarship": 12223, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 972063145000, "club": [] },
    { "id": 29, "no": 7107320642, "name": "宋秀英", "sex": 1, "age": 22, "college": "外语外贸学院", "major": "商务英语", "class": 5, "scholarship": 14988, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 1191743198000, "club": ["民乐"] },
    { "id": 30, "no": 7107320643, "name": "张杰", "sex": 1, "age": 28, "college": "物联网工程学院", "major": "网络工程", "class": 4, "scholarship": 16624, "remark": "<mark>HTML</mark><em>备注</em>", "status": 0, "entranceTime": 771024800000, "club": ["民乐"] },
  ];

  @ViewChild('baseTable', { static: true }) baseTable = null;
  columns: XTableColumns = [
    { title: '学号', field: 'no', fixed: 'left' },
    { title: '姓名', field: 'name', fixed: 'left' },
    { title: '性别', field: 'sex' },
    { title: '年龄', field: (rowData) => `${rowData.age}岁` },
    { title: '学院', field: 'college' },
    { title: '专业', field: 'major' },
    { title: '班级', field: (rowData) => `<strong>${rowData.class}</strong>班` },
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
