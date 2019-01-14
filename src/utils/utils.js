/**
 * Created by ZhangLynn on 2018/7/13
 **/
function getRelation(str1, str2) {
    if (str1 === str2) {
        console.warn('Two path are equal!'); // eslint-disable-line
    }
    const arr1 = str1.split('/');
    const arr2 = str2.split('/');
    if (arr2.every((item, index) => item === arr1[index])) {
        return 1;
    } else if (arr1.every((item, index) => item === arr2[index])) {
        return 2;
    }
    return 3;
}
function getRenderArr(routes) {
    let renderArr = [];
    renderArr.push(routes[0]);
    for (let i = 1; i < routes.length; i += 1) {
        // 去重
        renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
        // 是否包含
        const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
        if (isAdd) {
            renderArr.push(routes[i]);
        }
    }
    return renderArr;
}
/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */
export function getRoutes(path, routerData) {
    let routes = Object.keys(routerData).filter(
        routePath => routePath.indexOf(path) === 0 && routePath !== path
    );
    // Replace path to '' eg. path='user' /user/name => name
    routes = routes.map(item => item.replace(path, ''));
    // Get the route to be rendered to remove the deep rendering
    const renderArr = getRenderArr(routes);
    // Conversion and stitching parameters
    const renderRoutes = renderArr.map(item => {
        const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
        return {
            exact,
            ...routerData[`${path}${item}`],
            key: `${path}${item}`,
            path: `${path}${item}`,
        };
    });
    return renderRoutes;
}
export function http(options) {
    let url = options.url
    const method = options.method.toLocaleLowerCase() || 'get'
    const async = options.async != false // default is true
    const data = options.data
    const xhr = new XMLHttpRequest()

    if (options.timeout && options.timeout > 0) {
        xhr.timeout = options.timeout
    }
    return new Promise ( (resolve, reject) => {
        xhr.ontimeout = () => reject && reject('请求超时')
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    resolve && resolve(xhr.responseText)
                } else {
                    reject && reject()
                }
            }
        }
        xhr.onerror = err => reject && reject(err)

        let paramArr = []
        let encodeData
        if (data instanceof Object) {
            for (let key in data) {
                // 参数拼接需要通过 encodeURIComponent 进行编码
                paramArr.push( encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) )
            }
            encodeData = paramArr.join('&')
        }

        if (method === 'get') {
            // 检测 url 中是否已存在 ? 及其位置
            const index = url.indexOf('?')
            if (index === -1) url += '?'
            else if (index !== url.length -1) url += '&'
            // 拼接 url
            url += encodeData
        }

        xhr.open(method, url, async)
        if (method === 'get') xhr.send(null)
        else {
            // post 方式需要设置请求头
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8')
            xhr.send(encodeData)
        }
    } )
    // ajax({
    //     url: 'your request url',
    //     method: 'get',
    //     async: true,
    //     timeout: 1000,
    //     data: {
    //         test: 1,
    //         aaa: 2
    //     }
    // }).then(
    //     res => console.log('请求成功: ' + res),
    //     err => console.log('请求失败: ' + err)
    // )
}
