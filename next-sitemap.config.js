/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://mitchelmore.dev/",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    }
}