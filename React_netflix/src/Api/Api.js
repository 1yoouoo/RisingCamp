const API = {
    getRecommenedGenreList: () => {
        return {
            recommenedGenreList: [{
                    genreId : 1,
                    name : '드라마',
                    artList: [
                        {
                            artId : 101,
                            thumbnailUrl : "./img/slider1ImgItem1.webp",
                            videoUrl : "./img/video/BreakingBadVideo.mov",
                            interestPercent: 96.3,
                            ageRestricted: 15,
                            episodeCount: 16,
                            videoQuality: 'HD',
                            genreDescriptionList: ['진심 어린', '드라마'],
                        },
                        {
                            artId : 102,
                            thumbnailUrl : "./img/slider1ImgItem2.webp",
                            videoUrl : "./img/video/BreakingBadVideo.mov",
                            interestPercent: 92.3,
                            ageRestricted: 18,
                            episodeCount: 5,
                            videoQuality: 'HD',
                            genreDescriptionList: ['마약', '드라마'],
                        }
                    ]
    
                }
            ]
        }
    },
    getArt: (artId) => {
        if(artId === '101'){
            return  {
                artId : 101,
                title: '이상한 변호사 우영우',
                thumbnailUrl : "./img/slider1ImgItem1.webp",
                videoUrl : "./img/video/BreakingBadVideo.mov",
                interestPercent: 96.3,
                ageRestricted: 15,
                episodeCount: 16,
                videoQuality: 'HD',
                genreDescriptionList: ['진심 어린', '드라마'],
            };
        }
        
        
        return  {
            artId : 102,
            title: '이상한 변호사 우영우',
            thumbnailUrl : "./img/slider1ImgItem2.webp",
            videoUrl : "./img/video/BreakingBadVideo.mov",
            interestPercent: 92.3,
            ageRestricted: 18,
            episodeCount: 5,
            videoQuality: 'HD',
            genreDescriptionList: ['마약', '드라마'],
        }
        
    }
}

export default API;