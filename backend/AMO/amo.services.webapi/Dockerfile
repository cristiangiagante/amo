FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 60400
EXPOSE 44382

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["amo.services.webapi/amo.services.webapi.csproj", "amo.services.webapi/"]
RUN dotnet restore "amo.services.webapi/amo.services.webapi.csproj"
COPY . .
WORKDIR "/src/amo.services.webapi"
RUN dotnet build "amo.services.webapi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "amo.services.webapi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "amo.services.webapi.dll"]