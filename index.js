const { schema } = require('yaml-cfn');
const YAML = require('js-yaml')

module.exports.readVersion = function (contents) {
    const yaml = YAML.load(contents, {schema: schema})
    return yaml.Globals.Function.Tags.SAMVersion
}

module.exports.writeVersion = function (contents, version) {
    const yaml = YAML.load(contents, {schema: schema})
    yaml.Globals.Function.Tags.SAMVersion = version
    return YAML.dump(yaml, {schema: schema})
}
