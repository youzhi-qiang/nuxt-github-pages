export default defineNuxtRouteMiddleware((to) => {
	const config = useRuntimeConfig()
	const base = config.public.baseURL

	// 标准化路径格式
	const normalizedBase = base.endsWith('/') ? base : `${base}/`
	const currentPath = to.path.replace(/\/$/, '') // 移除路径末尾斜杠

	if (process.env.NODE_ENV === 'production') {
		// 需要跳过的路径条件
		const isRoot = currentPath === ''
		const hasCorrectPrefix = currentPath.startsWith(normalizedBase)
		const isAssetPath = currentPath.startsWith('/_nuxt')

		// 需要重定向的条件
		if (!isRoot && !hasCorrectPrefix && !isAssetPath) {
			return navigateTo({
				path: `${normalizedBase}${currentPath.slice(1)}`,
				query: to.query,
				hash: to.hash
			}, {
				redirectCode: 301,
				replace: true
			})
		}
	}
})