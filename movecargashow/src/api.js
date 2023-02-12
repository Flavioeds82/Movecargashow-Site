import Airtable from 'airtable'

Airtable.configure({
	endpointUrl: 'https://api.airtable.com',
	apiKey: 'keybtZtPemMedniMI',
})

const baseCranes = Airtable.base('app3VtC3pFmGk5fNg') // base dos guindastes //
const baseTruckCranes = Airtable.base('appbE2NaN0QyeaGm3') // base guindautos //
const baseTools = Airtable.base('appBJIFayhMINjtLu') // base ferramentas //
const basePosts = Airtable.base('app4UEHYulIlaG3zp') // base postagens

export default {
	//-----------------------	CRANES  --------------------------------//

	getCranes: async model => {
		try {
			const list = []

			await baseCranes(model)
				.select({
					view: 'Grid view',
				})
				.eachPage((records, fetchNextPage) => {
					for (const record of records) {
						const data = {
							model: record.get('MODELOS'),
							url: record.get('GRAFICOS'),
						}
						list.push(data)
					}
					fetchNextPage()
				})

			return list
		} catch (err) {
			console.error(err)
			return null
		}
	},

	getCraneNames: async () => {
		try {
			const list = []

			// Obtém a primeira página de registros de forma assíncrona
			const records = await baseCranes('NAMES')
				.select({
					view: 'Grid view',
				})
				.firstPage()

			// Adiciona cada registro à lista
			records.forEach(record => {
				list.push({
					name: record.get('NAME'),
					logo: record.get('LOGO'),
				})
			})

			// Retorna a lista completa
			return list
		} catch (err) {
			console.log(err)
		}
	},
	//--------------------- TRUCK CRANES -----------------//
	getTruckCranes: async model => {
		try {
			const list = []

			await baseTruckCranes(model)
				.select({
					view: 'Grid view',
				})
				.eachPage((records, fetchNextPage) => {
					for (const record of records) {
						const data = {
							model: record.get('MODELOS').replace('.pdf', ''),
							url: record.get('GRAFICOS'),
						}
						list.push(data)
					}
					fetchNextPage()
				})

			return list
		} catch (err) {
			console.error(err)
			return null
		}
	},

	getTruckCraneNames: async () => {
		try {
			const list = []

			// Obtém a primeira página de registros de forma assíncrona
			const records = await baseTruckCranes('NAMES')
				.select({
					view: 'Grid view',
				})
				.firstPage()

			// Adiciona cada registro à lista
			records.forEach(record => {
				list.push({
					name: record.get('NAME'),
					logo: record.get('LOGO'),
				})
			})

			// Retorna a lista completa
			return list
		} catch (err) {
			console.log(err)
		}
	},

	//---------------- TOOLS -------------------//

	getTools: async model => {
		try {
			const list = []

			await baseTools(model)
				.select({
					view: 'Grid view',
				})
				.eachPage((records, fetchNextPage) => {
					for (const record of records) {
						const data = {
							name: record.get('CATALOGOS'),
							url: record.get('GRAFICOS'),
							logo: record.get('LOGO'),
						}
						list.push(data)
					}
					fetchNextPage()
				})

			return list
		} catch (err) {
			console.error(err)
			return null
		}
	},

	getToolsNames: async () => {
		try {
			const list = []

			// Obtém a primeira página de registros de forma assíncrona
			const records = await baseTools('NAMES')
				.select({
					view: 'Grid view',
				})
				.firstPage()

			// Adiciona cada registro à lista
			records.forEach(record => {
				list.push({
					name: record.get('NAME'),
					logo: record.get('LOGO'),
				})
			})

			// Retorna a lista completa
			return list
		} catch (err) {
			console.log(err)
		}
	},

	getPosts: async () => {
		try {
			const list = []

			await basePosts('POSTAGENS')
				.select({
					maxRecords: 6,
					view: 'Grid view',
				})
				.eachPage((records, fetchNextPage) => {
					for (const record of records) {
						const data = {
							id: record.id,
							title: record.get('TITULO'),
							desc: record.get('TEXTO'),
							img: record.get('IMAGEM')[0].url,
							url: record.get('url'),
						}
						list.push(data)
					}
					fetchNextPage()
				})

			return list
		} catch (err) {
			console.error(err)
			return null
		}
	},
}
