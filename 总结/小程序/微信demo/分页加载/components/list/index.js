import {onloadMore} from '../../behaviors/onload-more'
Component({
	behaviors: [onloadMore],
	data: {
		api: 'ykf/public/convey/getArticleList'
	}
})
