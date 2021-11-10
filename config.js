module.exports  = {
  npmUrl: 'https://registry.npmjs.org/xxx-cli',
  promptTypeList:[{
      type: 'list',
      message: '请选择拉取的模版类型:',
      name: 'type',
      choices: [{
        name: 'react-tab-template',
        value: {
          url: 'https://github.com/cashon1120/react-tab-template.git',
          gitName: 'react-tab-template',
          val:'react标签页模板'
        }
      }]
  }],
};