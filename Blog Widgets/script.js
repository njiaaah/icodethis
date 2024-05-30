    const data = [
        {
        title: 'Celebrating 30 years of Blender',
        tags: ['Blender', 'Open Source', '3D Modeling'],
        preview: 'Today Blender turns 30 years old! The free and open-source 3D creation suite continues to empower artists and studios worldwide.'
        },
        {
        title: 'Microsoft Unveils New Mixed Reality Headset with Eye Tracking',
        tags: ['Microsoft', 'Mixed Reality', 'HoloLens'],
        preview: 'Microsoft has announced a new mixed reality headset featuring advanced eye tracking capabilities, promising a more immersive and natural user experience.'
        },
        {
        title: 'Google Chrome Updates Security Measures to Combat Phishing Attacks',
        tags: ['Browser', 'Security', 'Google'],
        preview: 'Google Chrome implements stricter security measures to protect users from phishing scams, making it harder for malicious websites to steal personal information.'
        },
        {
        title: 'Unity Announces Major Update Focusing on Game Optimization and Development Tools',
        tags: ['Unity', 'Game Development', '3D Engine'],
        preview: 'Unity releases a significant update aimed at optimizing game performance and enhancing developer tools, streamlining the creation process for mobile and console games.'
        },
        {
        title: 'Scientists Develop AI Model Capable of Generating Realistic Protein Structures',
        tags: ['AI', 'Science', 'Healthcare'],
        preview: 'Researchers create a groundbreaking AI model that can accurately predict protein structures, potentially accelerating drug discovery and furthering advancements in biomedicine.'
        },
        {
        title: 'SpaceX Successfully Launches Falcon Heavy Rocket Carrying Top Secret Military Payload',
        tags: ['SpaceX', 'Space Exploration', 'Rocket Launch'],
        preview: "SpaceX's Falcon Heavy rocket lifts off on a mission for the US military, marking another successful launch for the powerful reusable rocket system."
        },
        {
        title: 'New Study Points to Potential Link Between Social Media Use and Increased Anxiety Levels',
        tags: ['Social Media', 'Mental Health', 'Research'],
        preview: 'A recent study suggests a possible correlation between excessive social media usage and heightened anxiety levels, highlighting the importance of digital wellbeing.'
        },
        {
        title: 'Popular Node.js Framework Express Releases Major Update with Performance Enhancements',
        tags: ['nodejs', 'Web Development', 'Frameworks'],
        preview: 'The widely used Express.js framework for Node.js receives a significant update, introducing performance improvements and streamlined development workflows.'
        },
        {
        title: 'James Webb Space Telescope Captures Stunning Images of Jupiter and its Moons',
        tags: ['Astronomy', 'Space Exploration', 'Telescope'],
        preview: 'The James Webb Space Telescope delivers breathtaking images of Jupiter and its surrounding moons, revealing new details about the gas giant and its turbulent atmosphere.'
        },
        {
        title: 'Open-Source WebAssembly Compiler Gets Major Performance Boost',
        tags: ['WebAssembly', 'Open Source', 'Web Development'],
        preview: 'The open-source compiler for WebAssembly, Wasm, receives a significant performance upgrade, enabling faster web applications and more efficient execution of code in web browsers.'
        },
        {
            title: 'Global Chip Shortage Expected to Ease in Late 2024',
            tags: ['Technology', 'Supply Chain', 'Semiconductors'],
            preview: 'Analysts predict a gradual improvement in the global chip shortage throughout the latter half of 2024, offering relief to various industries impacted by the ongoing supply chain issues.'
        },
        {
            title: 'Record-Breaking Heatwave Sweeps Through Europe, Sparking Wildfires and Health Concerns',
            tags: ['Climate Change', 'Environment', 'Europe'],
            preview: 'Europe grapples with an unprecedented heatwave, causing wildfires, disrupting transportation, and raising health concerns for vulnerable populations.'
        },
        {
            title: 'Researchers Develop New Battery Technology with Faster Charging and Longer Lifespan',
            tags: ['Science', 'Technology', 'Energy'],
            preview: 'A breakthrough in battery technology promises faster charging times and extended lifespans for electronic devices, potentially revolutionizing the future of portable electronics.'
        },
        {
            title: 'Cybersecurity Experts Warn of Rise in Ransomware Attacks Targeting Small Businesses',
            tags: ['Cybersecurity', 'Business', 'Security'],
            preview: 'Cybersecurity experts urge small businesses to be vigilant against the growing threat of ransomware attacks, emphasizing the importance of data backups and security measures.'
        },
        {
            title: 'Virtual Reality Training Gains Traction in Various Industries, Enhances Learning and Skill Development',
            tags: ['VR', 'Education', 'Training'],
            preview: 'Virtual reality (VR) technology is increasingly utilized for training purposes across various industries, offering immersive and interactive learning experiences for employees.'
        },
        {
            title: 'Social Media Platforms Face Scrutiny Over Data Privacy Practices',
            tags: ['Social Media', 'Privacy', 'Regulation'],
            preview: 'Social media giants face growing scrutiny from governments and regulatory bodies regarding data privacy practices, sparking discussions about user consent and data protection laws.'
        },
        {
            title: 'E-commerce Sales Continue to Soar, Transforming Retail Landscape',
            tags: ['E-commerce', 'Business', 'Retail'],
            preview: 'Online shopping continues its exponential growth, reshaping the retail industry and prompting traditional brick-and-mortar stores to adapt to the evolving consumer behavior.'
        },
        {
            title: 'Self-Driving Car Technology Makes Progress, Navigating Complex Road Conditions with Improved Performance',
            tags: ['AI', 'Transportation', 'Self-Driving Cars'],
            preview: 'Autonomous vehicle technology progresses with self-driving cars demonstrating enhanced capabilities in handling complex road situations and traffic patterns.'
        },
        {
            title: 'Renewable Energy Sources Account for Growing Share of Global Energy Production',
            tags: ['Sustainability', 'Energy', 'Renewable Energy'],
            preview: 'Renewable energy sources, like solar and wind power, contribute to a larger portion of the global energy mix, signifying a shift towards cleaner and more sustainable energy production.' 
        },
        {
            title: 'International Collaboration on Climate Change Stressed as Urgent Action is Needed',
            tags: ['Climate Change', 'Environment', 'International Relations'],
            preview: 'World leaders emphasize the importance of international cooperation in addressing climate change, urging nations to adopt stricter environmental regulations and work towards sustainable solutions.'
        }
    ];

    const allTags = data.reduce((accumulator, currentValue) => {
        currentValue.tags.forEach(tag => accumulator.add(tag))
        return accumulator
    }, new Set())

    // fill tags container with tags

    const tagsContainer = document.querySelector('.search__tags')


    allTags.forEach(tag => {
        let newTag = document.createElement('div')
        newTag.setAttribute('name', tag)
        newTag.innerText = tag
        newTag.classList.add('search__tag')
        tagsContainer.appendChild(newTag)
    });

    // uncheck more tags chb if switched to search

    const searchLabelChb = document.querySelector('#search-switch__search')
    const moreTagsChb = document.querySelector('#search__show-more-tags')

    searchLabelChb.addEventListener('change', ()=>{
        moreTagsChb.checked = false
    })

    // generate news

    function generateListItem(item) {

        const listItem = document.createElement('li')
        const article = document.createElement('article')
        const title = document.createElement('h3')
        const preview = document.createElement('p')
        const footer = document.createElement('footer')

        listItem.classList.add('articles__item')
        article.classList.add('article__article')
        title.classList.add('artile__title')
        preview.classList.add('article__text')
        footer.classList.add('article__footer')

        title.textContent = item.title
        preview.textContent = item.preview

        item.tags.forEach(tag => {
            const tagSpan = document.createElement('span')
            tagSpan.classList.add('article__footer__tag')
            tagSpan.textContent = tag
            footer.appendChild(tagSpan)
        })

        article.appendChild(title)
        article.appendChild(preview)
        article.appendChild(footer)
        listItem.appendChild(article)
        return listItem
    }

    function generateList(data) {
        const list = document.createElement('ul')

        data.forEach(item => {
            const listItem = generateListItem(item)
            list.appendChild(listItem)
        })

        return list
    }

    function toggleTagSelection(tag) {
        tag.classList.toggle('tag_selected')
    }

    function filterArticlesByTags(tags) {
        const articles = document.querySelectorAll('.articles__item')

        articles.forEach(article => {
            const footerTags = article.querySelectorAll('.article__footer__tag')
            let allTagsFound = true

            tags.forEach(tag => {
                let tagFound = false

                footerTags.forEach(footerTag => {
                    if (footerTag.textContent === tag.textContent && tag.classList.contains('tag_selected')) {
                        tagFound = true
                    }
                })

                if (!tagFound) {
                    allTagsFound = false
                }
            })

            if (allTagsFound) {
                article.classList.add('article-shown')
                article.classList.remove('article-hidden')
            } else {
                article.classList.add('article-hidden')
                article.classList.remove('article-shown')
            }
        })
    }


    function unselectAllTags() {
        const tags = document.querySelectorAll('.search__tag')
        tags.forEach(tag => tag.classList.remove('tag_selected'))
    }


    const container = document.querySelector('#article__container')
    const list = generateList(data)
    container.appendChild(list)

    const searchInput = document.querySelector('.search__search__input')
    // search with text input and undo filtering
    searchInput.addEventListener('input', () => {
        const searchString = searchInput.value
        filterArticlesBySearchString(searchString)
        unselectAllTags()
    })

    const searchTags = document.querySelectorAll('.search__tag')

    searchTags.forEach(tag => {
        tag.addEventListener('click', () => {
            toggleTagSelection(tag)
            const selectedTags = document.querySelectorAll('.tag_selected')
            filterArticlesByTags(selectedTags)
        })
    })


    function filterArticlesBySearchString(searchString) {
        const articles = document.querySelectorAll('.articles__item')

        articles.forEach(article => {
            const title = article.querySelector('.artile__title').textContent.toLowerCase()
            const preview = article.querySelector('.article__text').textContent.toLowerCase()
            const search = searchString.toLowerCase()

            if (title.includes(search) || preview.includes(search) || !searchString) {
                article.classList.remove('article-hidden')
                article.classList.add('article-shown')
            } else {
                article.classList.remove('article-shown')
                article.classList.add('article-hidden')
            }
        })
    }
