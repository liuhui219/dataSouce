module.exports = {
  committee: {
    sex: [
      { label: "男", value: "0" },
      { label: "女", value: "1" },
    ],
    sessionNext: [
      { label: "届", value: "0" },
      { label: "次", value: "1" },
    ],
    notice: [
      { label: "通知", value: "0" },
      { label: "公告", value: "1" },
    ],
    bool: [
      { label: "是", value: "0" },
      { label: "否", value: "1" },
    ],
    level: [
      { label: "普通", value: "0" },
      { label: "严重", value: "1" },
      { label: "非常严重", value: "2" },
    ],
    jyxc: [
      { label: "主题搜索", value: "0" },
      { label: "等级搜索", value: "1" },
      { label: "分类搜索", value: "2" },
    ],
    duration_time: [
      { label: "30", value: "30" },
      { label: "1小时", value: "60" },
      { label: "2小时", value: "120" },
      { label: "3小时", value: "180" },
      { label: "4小时", value: "240" },
      { label: "5小时", value: "300" },
    ],
    nation: [
      { label: "汉", value: "0" },
      { label: "壮", value: "1" },
      { label: "满", value: "2" },
      { label: "回", value: "3" },
      { label: "土家", value: "4" },
      { label: "瑶", value: "5" },
    ],
    education: [
      { label: "博士生", value: "0" },
      { label: "硕士生", value: "1" },
      { label: "研究生", value: "2" },
      { label: "本科生", value: "3" },
      { label: "大专生", value: "4" },
      { label: "高中生", value: "5" },
      { label: "中专生", value: "6" },
      { label: "初中生", value: "7" },
      { label: "小学生", value: "8" },
    ],
    major: [
      { label: "未定义", value: "0" },
      { label: "经济学", value: "1" },
      { label: "法学", value: "2" },
      { label: "教育学", value: "3" },
      { label: "文学", value: "4" },
      { label: "历史学", value: "5" },
      { label: "理学", value: "6" },
      { label: "工学", value: "7" },
      { label: "农学", value: "8" },
      { label: "医学", value: "9" },
      { label: "管理学", value: "10" },
      { label: "艺术学", value: "11" },
      { label: "军事学", value: "12" },
      { label: "哲学", value: "13" },
    ],
    party: [
      { label: "中共", value: "1" },
      { label: "民建", value: "2" },
      { label: "民进", value: "3" },
      { label: "民革", value: "4" },
      { label: "农工", value: "5" },
      { label: "致公", value: "6" },
      { label: "民盟", value: "7" },
      { label: "无党派", value: "8" },
    ],
    serve_status: [
      { label: "在职", value: "0" },
      { label: "请辞", value: "1" },
      { label: "撤职", value: "2" },
    ],
  },
  proposal: {
    status: [
      { label: "待审查", value: "0" },
      { label: "审查不通过", value: "10" },
      { label: "待交办", value: "20" },
      { label: "待办理", value: "30" },
      { label: "建议变更", value: "31" },
      { label: "待答复", value: "40" },
      { label: "已答复", value: "41" },
      { label: "待评价", value: "50" },
      { label: "待重办", value: "60" },
      { label: "已办结", value: "70" },
    ],
    adminStatus: [
      { label: "全部", value: "-1" },
      { label: "待审查", value: "0" },
      { label: "审查不通过", value: "10" },
      { label: "待交办", value: "20" },
      { label: "待办理", value: "30" },
      { label: "建议变更", value: "31" },
      { label: "待答复", value: "40" },
      { label: "已答复", value: "41" },
      { label: "待评价", value: "50" },
      { label: "待重办", value: "60" },
      { label: "已办结", value: "70" },
    ],
    analyze: [
      { label: "民族", value: "0" },
      { label: "性别", value: "1" },
      { label: "年龄", value: "2" },
      { label: "学历", value: "3" },
      { label: "党派", value: "4" },
      { label: "界别", value: "5" },
      { label: "联络组", value: "6" },
      { label: "专委会", value: "7" },
      { label: "是否麻城政协委员", value: "8" },
      { label: "是否麻城政协常员", value: "9" },
      { label: "是否黄冈政协委员", value: "10" },
      { label: "是否省政协委员", value: "11" },
    ],
    proposer_type: [
      { label: "委员", value: "0" },
      { label: "联络组", value: "1" },
      { label: "界别", value: "2" },
      { label: "专委会", value: "3" },
      { label: "参加单位", value: "4" },
    ],
    type: [
      { label: "管理列表", value: "0" },
      { label: "查看列表", value: "1" },
    ],
    search_type: [
      { label: "案由查找", value: "0" },
      { label: "个人提案查找", value: "1" },
      { label: "界别提案查找", value: "2" },
      { label: "联络组提案查找", value: "3" },
      { label: "专委会提案查找", value: "4" },
      { label: "参加单位提案查找", value: "5" },
      { label: "提案分类查找", value: "6" },
    ],
    committee_type: [
      { label: "姓名", value: "0" },
      { label: "身份证", value: "1" },
      { label: "委员编号", value: "2" },
      { label: "手机号码", value: "3" },
    ],
    committee_types: [
      { label: "姓名", value: "0" },
      { label: "委员编号", value: "2" },
      { label: "手机号码", value: "3" },
    ],
    committeeMenu: {
      menu: [
        {
          id: 100,
          name: "提案管理",
          path: "systemManage",
          menu: [
            {
              id: 101,
              name: "提案信息",
              path: "committeeProposal",
            },
            {
              id: 102,
              name: "联名通知",
              path: "committeeNotice",
            },
          ],
        },
        {
          id: 200,
          name: "消息中心",
          path: "eventMeeting",
          menu: [
            {
              id: 201,
              name: "会议发布",
              path: "meetManage",
            },
            {
              id: 202,
              name: "会议通知",
              path: "meetNotice",
            },
            {
              id: 203,
              name: "活动发布",
              path: "eventManage",
            },
            {
              id: 204,
              name: "活动通知",
              path: "eventNotice",
            },
            {
              id: 205,
              name: "公告公示",
              path: "notifications",
            },
          ],
        },
        {
          id: 301,
          name: "社情民意",
          path: "socialOpinions",
        },
        {
          id: 400,
          name: "文史资料",
          path: "historyManage",
          menu: [
            {
              id: 401,
              name: "我的提交",
              path: "myHistory",
            },
            {
              id: 402,
              name: "阅览室",
              path: "readRoom",
            },
          ],
        },
        {
          id: 500,
          name: "账号管理",
          path: "personalManage",
          menu: [
            {
              id: 501,
              name: "单位信息",
              path: "myInfo",
            },
            {
              id: 502,
              name: "设置密码",
              path: "setPassword",
            },
          ],
        },
        {
          id: 600,
          name: "委员通讯录",
          path: "concat",
          menu: [
            {
              id: 601,
              name: "委员通讯录",
              path: "committeeConcat",
            },
          ],
        },
        //  {
        //    id: 700,
        //    name: '履职信息',
        //    path: 'committeeManage',
        //    menu: [
        //      {
        //        id: 701,
        //        name: '履职信息',
        //        path: 'committeeRecords',
        //      },
        //    ],
        //  },
      ],
    },
    committeeMenu1: {
      menu: [
        {
          id: 100,
          name: "提案管理",
          path: "systemManage",
          menu: [
            {
              id: 101,
              name: "提案信息",
              path: "committeeProposal",
            },
            {
              id: 102,
              name: "联名通知",
              path: "committeeNotice",
            },
          ],
        },
        {
          id: 200,
          name: "消息中心",
          path: "eventMeeting",
          menu: [
            {
              id: 201,
              name: "会议通知",
              path: "meetNotice",
            },

            {
              id: 202,
              name: "活动通知",
              path: "eventNotice",
            },
            {
              id: 203,
              name: "公告公示",
              path: "notifications",
            },
          ],
        },
        {
          id: 301,
          name: "社情民意",
          path: "socialOpinions",
        },
        {
          id: 400,
          name: "文史资料",
          path: "historyManage",
          menu: [
            {
              id: 401,
              name: "我的提交",
              path: "myHistory",
            },
            {
              id: 402,
              name: "阅览室",
              path: "readRoom",
            },
          ],
        },
        {
          id: 500,
          name: "账号管理",
          path: "personalManage",
          menu: [
            {
              id: 501,
              name: "单位信息",
              path: "myInfo",
            },
            {
              id: 502,
              name: "设置密码",
              path: "setPassword",
            },
          ],
        },
        {
          id: 600,
          name: "委员通讯录",
          path: "concat",
          menu: [
            {
              id: 601,
              name: "委员通讯录",
              path: "committeeConcat",
            },
          ],
        },
        //  {
        //    id: 700,
        //    name: '履职信息',
        //    path: 'committeeManage',
        //    menu: [
        //      {
        //        id: 701,
        //        name: '履职信息',
        //        path: 'committeeRecords',
        //      },
        //    ],
        //  },
      ],
    },
  },
  exhibitor: {
    exhibitorMenu: {
      menu: [
        {
          id: 100,
          name: "提案管理",
          path: "systemManage",
          menu: [
            {
              id: 101,
              name: "提案信息",
              path: "exhibitorProposal",
            },
            {
              id: 102,
              name: "承办通知",
              path: "exhibitorOrganizer",
            },
          ],
        },
        {
          id: 200,
          name: "账号管理",
          path: "personalManage",
          menu: [
            {
              id: 201,
              name: "设置密码",
              path: "exhibitorSetPassword",
            },
          ],
        },
      ],
    },
  },
};
