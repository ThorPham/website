# calculatenetworkfee 方法

计算指定交易的网络费 GasToken。

:::note
 此方法由插件提供，需要安装 [RpcServer](https://github.com/neo-project/neo-modules/releases) 插件才可以调用。
:::

## 参数说明

tx ：交易信息Base64编码的字符串。

## 调用示例

请求正文：

```json
{
  "jsonrpc": "2.0",
  "method": "calculatenetworkfee",
  "params": ["AAzUzgl2c4kAAAAAAMhjJAAAAAAAmRQgAAKDHlc9J/rM4KzhpixYX/fRkt2q8ACBubhEJKzaXrq9mt5PesW40qC01AEAXQMA6HZIFwAAAAwUgx5XPSf6zOCs4aYsWF/30ZLdqvAMFIG5uEQkrNpeur2a3k96xbjSoLTUE8AMCHRyYW5zZmVyDBS8r0HWhMfUrW7g2Z2pcHudHwyOZkFifVtSOAJCDED0lByRy1/NfBDdKCFLA3RKAY+LLVeXAvut42izfO6PPsKX0JeaL959L0aucqcxBJfWNF3b+93mt9ItCxRoDnChKQwhAuj/F8Vn1i8nT+JHzIhKKmzTuP0Nd5qMWFYomlYKzKy0C0GVRA14QgxAMbiEtF4zjCUjGAzanxLckFiCY3DeREMGIxyerx5GCG/Ki0LGvNzbvPUAWeVGvbL5TVGlK55VfZECmy8voO1LsisRDCEC6P8XxWfWLydP4kfMiEoqbNO4/Q13moxYViiaVgrMrLQRC0ETje+v"],
  "id": 1
}
```

响应正文：

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "networkfee": "23848400"
    }
}
```

