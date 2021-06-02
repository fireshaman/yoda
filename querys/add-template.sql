DECLARE @return_value int
DECLARE @NetworkIdList IntegerIDList
DECLARE @TemplateIdList IntegerIDList
DECLARE @Hidden BIT
DECLARE @DisableExternalURL BIT
INSERT INTO @NetworkIdList (IntegerID) VALUES (0000)
INSERT INTO @TemplateIdList (IntegerID) VALUES (1111)
EXEC    @return_value = [tam].[AddTemplatesToNetworks]
@TemplateIdList,
@NetworkIdList,
@Hidden = 0,
@DisableExternalURL = 0
SELECT  'Return Value' = @return_value