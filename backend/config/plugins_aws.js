module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIASDXLMQ65YN46IDIH'),
        secretAccessKey: env('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'),
        region: env('ap-northeast-1'),
        params: {
            Bucket: env('strapi-shiftingsites-images'),
        },
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
      }
    },
  }
});
