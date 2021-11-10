module.exports  = {
  npmUrl: 'https://registry.npmjs.org/xxx-cli',
  promptTypeList:[{
      type: 'list',
      message: '请选择拉取的模版类型:',
      name: 'type',
      choices: [{
        name: 'react-cli-template',
        value: {
          url: 'git://github.com/cashon1120/react-cli-template.git',
          gitName: 'react-cli-template',
          val:'cashon react模板'
        }
      }]
  }],
};