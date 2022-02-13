export const getServerSideProps = async ({ req, locale }) => {

const deviceDetector = new DeviceDetector();
const { device } = deviceDetector.parse(req.headers['user-agent']);
console.log(device);

return {
props: {
...await serverSideTranslations(locale, ['common']),
}
}
}
https://github.com/pratimashrivastava/React-TS-Internationalization/blob/master/i18n.ts
