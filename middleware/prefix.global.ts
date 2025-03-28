export default defineNuxtRouteMiddleware((to, from) => {
	const config = useRuntimeConfig()

	// 仅在生产环境处理
	if (process.env.NODE_ENV === 'production') {
		const base = config.public.baseURL
		console.log('生产环境处理', to.path)
		// 排除base路径自身和已包含前缀的路径
		// if (!to.path.startsWith(base) ) {
		// 	return navigateTo({
		// 		path: `${base}${to.path.slice(1)}`,
		// 		query: to.query,
		// 		hash: to.hash
		// 	}, { redirectCode: 301 })
		// }


	}
})