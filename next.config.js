module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /(antd\/|@ant-design\/).*\.less$/,
      use: 'null-loader',
    })

    return config
  },
}

// fix: prevents error when .less files are required by node
if (require && require.extensions) {
  require.extensions['.less'] = () => {
    // noop
  }
}
