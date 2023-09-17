# 리노킷 API

## Rino.buildComponent()

```
Rino.buildComponent
arguments:
{
    templateId: 'Name of component',
    componentId: 'ID for component, you can skip this argument'
}
```

## getValueFromObj()

```
getValueFromObj()
arguments:
{
    target: 'The indicator for object item, if data.name then just name',
    data: 'Data object'
}
```

## getValueFromData()

```
This function get rid of data and perform getValueFromObj()

getValueFromData()
arguments:
{
    target: 'The indicator for object item, data.name',
    data: 'Data object'
}
```

## replaceEvents()

```
replaceEvents()
arguments:
{
    html: 'HTML content in text'
}
```
