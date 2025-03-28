export default defineNuxtRouteMiddleware((to) => {
	const config = useRuntimeConfig()
	const base = config.public.baseURL

	// 仅在生产环境且非根路径时处理
	if (process.env.NODE_ENV === 'production' && to.path !== '/' && !to.path.startsWith(base)) {
		return navigateTo({
			path: `${base}${to.path.slice(1)}`,
			query: to.query,
			hash: to.hash
		}, { redirectCode: 301 })
	}
})