import optionsJson from './options.json' with { type: 'json' };
import commonConfig from '../../../Config.json' with { type: 'json' };


const StartFunc = () => {
  const $table = $('#table');

  const finalOptions = {
    ...optionsJson,
    columns: commonConfig.columns
  };

  $table.bootstrapTable(finalOptions);
};

export { StartFunc };