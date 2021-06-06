import { MockRequest, MockStatusError } from 'ng-easy-mock';
import * as Mock from 'mockjs';

/**
 * x-table 组件 测试用例
 */

let collegeList = [{
  name: '物联网工程学院',
  majorList: ['软件工程', '网络工程', '人工智能']
}, {
  name: '外语外贸学院',
  majorList: ['商务英语', '国际贸易实务', '国际邮轮乘务管理']
}, {
  name: '土木工程学院',
  majorList: ['工程造价', '建筑工程技术', '工程造价管理']
}];

export const xtable = {
  '/xtable/student/list': (req: MockRequest) => {
    let id = Number(req.queryString.pageSize) * (Number(req.queryString.pageIndex) - 1) + 1;
    let res = Mock.mock({
      'code': 0,
      'msg': '成功',
      'data': {
        ['data|' + req.queryString.pageSize]: [{
          "id|+1": id,
          "no|+1": 7107320614,
          "name": "@cname",
          "sex|0-1": 0,
          "age|18-30": 18,
          "college": null,
          "major": null,
          "class|1-5": 1,
          "entranceTime": () => +new Date(Mock.mock('@date("yyyy/MM/dd HH:mm:ss")')),
          "scholarship|8000-20000": 0,
          "club|1-3": () => ["民乐", "摄影", "骑行", "电竞"].slice(0, Mock.mock('@integer(0, 3)')),
          "remark": "<mark>HTML</mark><em>备注</em>",
          "status|0-1": 0,
        }],
        'total': 200
      }
    });

    res.data.data.forEach(row => {
      let college = collegeList[Mock.mock('@integer(0, 2)')];
      row.college = college.name;
      row.major = college.majorList[Mock.mock('@integer(0, 2)')];
    });

    return res;
  },

  '/xtable/student/flow': (req: MockRequest) => {
    let res = xtable['/xtable/student/list'](req);
    return res;
  },

  'POST /xtable/student/detail-list': (req: MockRequest) => {
    let id = Number(req.body.pageSize) * (Number(req.body.pageIndex) - 1) + 1;
    let res = Mock.mock({
      'code': 0,
      'msg': '成功',
      'data': {
        ['data|' + req.body.pageSize]: [{
          "id|+1": id,
          "no|+1": 7107320614,
          "name": "@cname",
          "sex|0-1": 0,
          "age|18-30": 18,
          "birthdate": () => +new Date(Mock.mock('@date("yyyy/MM/dd")')),
          "nation": "汉",
          "political_identity|0-3": 0,
          "id_type|1": ["居民身份证", "士官证", "学生证", "驾驶证", "护照", "港澳通行证"],
          "id_number": Mock.mock('@id'),
          "phone": 13912341234,
          "email": "email@email.com",
          "native_place": "@city(true)",
          "guardian": "@cname",
          "guardian_phone": 13812341234,
          "guardian_duty|1": ['务农', '经商', '务工', '从政'],
          "instructor": "@cname",
          "dormitory": "@integer(1,9)栋@integer(1,6)@integer(11,66)",
          "dormitory_manager": "@cname",
          "college": null,
          "major": null,
          "class|1-5": 1,
          "degree|1": ['无', '学士', '硕士', '博士'],
          "admission_date": () => +new Date(Mock.mock('@date("yyyy/MM/dd")')),
          "year_limit": "@integer(1,6)年",
          "eductional_year": "@integer(1,6)年",
          "duty|1": ['无', '班长', '学习委员', '纪律委员', '卫生委员'],
          "scholarship|8000-20000": 0,
          "scholarship_type|1": ['贫困补给', '进步鼓励', '优秀奖励'],
          "address": "@county(true)",
          "remark": "@cparagraph(1, 3)",
          "exam|5": [{
            "major|1": ['商务英语', '国际贸易实务', '国际邮轮乘务管理'],
            "course|1": ["高等数学", "线性代数", "概率论", "大学物理", "大学英语", "大学体育", "计算机", "毛概", "马哲", "邓论", "军事理论", "法律基础"],
            "grade": "@integer(60,100)分",
            "ranking": "@integer(0,1000)",
            "exam_time": () => +new Date(Mock.mock('@date("yyyy/MM/dd HH:mm:ss")')),
          }],
        }],
        'total': 200
      }
    });

    res.data.data.forEach(row => {
      let college = collegeList[Mock.mock('@integer(0, 2)')];
      row.college = college.name;
      row.major = college.majorList[Mock.mock('@integer(0, 2)')];
    });

    return res;
  },

  'POST /xtable/student/save': { code: 0 },
};