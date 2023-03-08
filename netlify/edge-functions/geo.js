export default (_, context) => Response.json({
  country: context.geo?.country,
  timezone: context.geo?.timezone
})

export const config = { path: "/geo" }
