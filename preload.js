const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions',{
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping')
})//使用辅助函数包装ipcRenderer，避免使用contextBridge直接暴露ipcRenderer模块，这样容易导致渲染器进程与主进程随意通信。
