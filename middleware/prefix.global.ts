export default defineNuxtRouteMiddleware((to) => {
	const config = useRuntimeConfig()
	const base = config.public.baseURL

	// 统一路径格式处理
	const normalizedBase = base.endsWith('/') ? base : `${base}/`
	const currentPath = to.path.endsWith('/') ? to.path.slice(0, -1) : to.path

	// 生产环境路径校验
	if (process.env.NODE_ENV === 'production') {
		// 需要添加前缀的路径条件
		const shouldAddPrefix = !currentPath.startsWith(normalizedBase)
			&& currentPath !== '/'
			&& !currentPath.startsWith('/_nuxt')

		if (shouldAddPrefix) {
			return navigateTo({
				path: `${normalizedBase}${currentPath.slice(1)}`,
				query: to.query,
				hash: to.hash
			}, { redirectCode: 301, replace: true })
		}
	}
})