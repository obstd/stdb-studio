const os = require("os");

module.exports = {
  head: {
    script: [
    ],
  },
  // target: 'static',
  ssr: false,
  plugins: [
    {
      src: '~/plugins/event_bus.js',
      ssr: false
    },
  ],
  components: {
    dirs: [
      '~/components'
    ]
  },
}
