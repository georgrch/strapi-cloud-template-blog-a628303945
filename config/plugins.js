module.exports = () => ({
  'mux-video-uploader': {
    config: {
      accessTokenId: process.env.MUX_ACCESS_TOKEN_ID || 'your_mux_access_token_id_here',
      secretKey: process.env.MUX_SECRET_KEY || 'your_mux_secret_key_here',
    },
  },
});
