import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum Color {
    WHITE = "WHITE",
    BLACK = "BLACK",
    GREY = "GREY"
}

export enum CatScalarFieldEnum {
    id = "id",
    name = "name",
    color = "color"
}

registerEnumType(CatScalarFieldEnum, { name: 'CatScalarFieldEnum', description: undefined })
registerEnumType(Color, { name: 'Color', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })

@ObjectType()
export class AggregateCat {
    @Field(() => CatCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CatCountAggregate>;
    @Field(() => CatMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CatMinAggregate>;
    @Field(() => CatMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CatMaxAggregate>;
}

@ArgsType()
export class CatAggregateArgs {
    @Field(() => CatWhereInput, {nullable:true})
    @Type(() => CatWhereInput)
    where?: InstanceType<typeof CatWhereInput>;
    @Field(() => [CatOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CatOrderByWithRelationInput>;
    @Field(() => CatWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CatWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CatCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CatCountAggregateInput>;
    @Field(() => CatMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CatMinAggregateInput>;
    @Field(() => CatMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CatMaxAggregateInput>;
}

@InputType()
export class CatCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    color?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class CatCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @Field(() => Int, {nullable:false})
    color!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class CatCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;
}

@InputType()
export class CatCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Color, {nullable:false})
    color!: keyof typeof Color;
}

@InputType()
export class CatCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Color, {nullable:false})
    color!: keyof typeof Color;
}

@ArgsType()
export class CatGroupByArgs {
    @Field(() => CatWhereInput, {nullable:true})
    @Type(() => CatWhereInput)
    where?: InstanceType<typeof CatWhereInput>;
    @Field(() => [CatOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CatOrderByWithAggregationInput>;
    @Field(() => [CatScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CatScalarFieldEnum>;
    @Field(() => CatScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof CatScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => CatCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CatCountAggregateInput>;
    @Field(() => CatMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CatMinAggregateInput>;
    @Field(() => CatMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CatMaxAggregateInput>;
}

@ObjectType()
export class CatGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Color, {nullable:false})
    color!: keyof typeof Color;
    @Field(() => CatCountAggregate, {nullable:true})
    _count?: InstanceType<typeof CatCountAggregate>;
    @Field(() => CatMinAggregate, {nullable:true})
    _min?: InstanceType<typeof CatMinAggregate>;
    @Field(() => CatMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof CatMaxAggregate>;
}

@InputType()
export class CatMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    color?: true;
}

@ObjectType()
export class CatMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Color, {nullable:true})
    color?: keyof typeof Color;
}

@InputType()
export class CatMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;
}

@InputType()
export class CatMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    color?: true;
}

@ObjectType()
export class CatMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    name?: string;
    @Field(() => Color, {nullable:true})
    color?: keyof typeof Color;
}

@InputType()
export class CatMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;
}

@InputType()
export class CatOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;
    @Field(() => CatCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof CatCountOrderByAggregateInput>;
    @Field(() => CatMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof CatMaxOrderByAggregateInput>;
    @Field(() => CatMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof CatMinOrderByAggregateInput>;
}

@InputType()
export class CatOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;
}

@InputType()
export class CatScalarWhereWithAggregatesInput {
    @Field(() => [CatScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CatScalarWhereWithAggregatesInput>;
    @Field(() => [CatScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CatScalarWhereWithAggregatesInput>;
    @Field(() => [CatScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CatScalarWhereWithAggregatesInput>;
    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof UuidWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => EnumColorWithAggregatesFilter, {nullable:true})
    color?: InstanceType<typeof EnumColorWithAggregatesFilter>;
}

@InputType()
export class CatUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Color, {nullable:false})
    color!: keyof typeof Color;
}

@InputType()
export class CatUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumColorFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
}

@InputType()
export class CatUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumColorFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
}

@InputType()
export class CatUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumColorFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
}

@InputType()
export class CatUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => EnumColorFieldUpdateOperationsInput, {nullable:true})
    color?: InstanceType<typeof EnumColorFieldUpdateOperationsInput>;
}

@InputType()
export class CatWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class CatWhereInput {
    @Field(() => [CatWhereInput], {nullable:true})
    AND?: Array<CatWhereInput>;
    @Field(() => [CatWhereInput], {nullable:true})
    OR?: Array<CatWhereInput>;
    @Field(() => [CatWhereInput], {nullable:true})
    NOT?: Array<CatWhereInput>;
    @Field(() => UuidFilter, {nullable:true})
    id?: InstanceType<typeof UuidFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => EnumColorFilter, {nullable:true})
    color?: InstanceType<typeof EnumColorFilter>;
}

@ObjectType()
export class Cat {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Color, {nullable:false})
    color!: keyof typeof Color;
}

@ArgsType()
export class CreateManyCatArgs {
    @Field(() => [CatCreateManyInput], {nullable:false})
    @Type(() => CatCreateManyInput)
    data!: Array<CatCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneCatArgs {
    @Field(() => CatCreateInput, {nullable:false})
    @Type(() => CatCreateInput)
    data!: InstanceType<typeof CatCreateInput>;
}

@ArgsType()
export class DeleteManyCatArgs {
    @Field(() => CatWhereInput, {nullable:true})
    @Type(() => CatWhereInput)
    where?: InstanceType<typeof CatWhereInput>;
}

@ArgsType()
export class DeleteOneCatArgs {
    @Field(() => CatWhereUniqueInput, {nullable:false})
    @Type(() => CatWhereUniqueInput)
    where!: InstanceType<typeof CatWhereUniqueInput>;
}

@ArgsType()
export class FindFirstCatOrThrowArgs {
    @Field(() => CatWhereInput, {nullable:true})
    @Type(() => CatWhereInput)
    where?: InstanceType<typeof CatWhereInput>;
    @Field(() => [CatOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CatOrderByWithRelationInput>;
    @Field(() => CatWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CatWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CatScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CatScalarFieldEnum>;
}

@ArgsType()
export class FindFirstCatArgs {
    @Field(() => CatWhereInput, {nullable:true})
    @Type(() => CatWhereInput)
    where?: InstanceType<typeof CatWhereInput>;
    @Field(() => [CatOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CatOrderByWithRelationInput>;
    @Field(() => CatWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CatWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CatScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CatScalarFieldEnum>;
}

@ArgsType()
export class FindManyCatArgs {
    @Field(() => CatWhereInput, {nullable:true})
    @Type(() => CatWhereInput)
    where?: InstanceType<typeof CatWhereInput>;
    @Field(() => [CatOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CatOrderByWithRelationInput>;
    @Field(() => CatWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof CatWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [CatScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CatScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueCatOrThrowArgs {
    @Field(() => CatWhereUniqueInput, {nullable:false})
    @Type(() => CatWhereUniqueInput)
    where!: InstanceType<typeof CatWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueCatArgs {
    @Field(() => CatWhereUniqueInput, {nullable:false})
    @Type(() => CatWhereUniqueInput)
    where!: InstanceType<typeof CatWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyCatArgs {
    @Field(() => CatUpdateManyMutationInput, {nullable:false})
    @Type(() => CatUpdateManyMutationInput)
    data!: InstanceType<typeof CatUpdateManyMutationInput>;
    @Field(() => CatWhereInput, {nullable:true})
    @Type(() => CatWhereInput)
    where?: InstanceType<typeof CatWhereInput>;
}

@ArgsType()
export class UpdateOneCatArgs {
    @Field(() => CatUpdateInput, {nullable:false})
    @Type(() => CatUpdateInput)
    data!: InstanceType<typeof CatUpdateInput>;
    @Field(() => CatWhereUniqueInput, {nullable:false})
    @Type(() => CatWhereUniqueInput)
    where!: InstanceType<typeof CatWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneCatArgs {
    @Field(() => CatWhereUniqueInput, {nullable:false})
    @Type(() => CatWhereUniqueInput)
    where!: InstanceType<typeof CatWhereUniqueInput>;
    @Field(() => CatCreateInput, {nullable:false})
    @Type(() => CatCreateInput)
    create!: InstanceType<typeof CatCreateInput>;
    @Field(() => CatUpdateInput, {nullable:false})
    @Type(() => CatUpdateInput)
    update!: InstanceType<typeof CatUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class EnumColorFieldUpdateOperationsInput {
    @Field(() => Color, {nullable:true})
    set?: keyof typeof Color;
}

@InputType()
export class EnumColorFilter {
    @Field(() => Color, {nullable:true})
    equals?: keyof typeof Color;
    @Field(() => [Color], {nullable:true})
    in?: Array<keyof typeof Color>;
    @Field(() => [Color], {nullable:true})
    notIn?: Array<keyof typeof Color>;
    @Field(() => NestedEnumColorFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumColorFilter>;
}

@InputType()
export class EnumColorWithAggregatesFilter {
    @Field(() => Color, {nullable:true})
    equals?: keyof typeof Color;
    @Field(() => [Color], {nullable:true})
    in?: Array<keyof typeof Color>;
    @Field(() => [Color], {nullable:true})
    notIn?: Array<keyof typeof Color>;
    @Field(() => NestedEnumColorWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumColorWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumColorFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumColorFilter>;
    @Field(() => NestedEnumColorFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumColorFilter>;
}

@InputType()
export class NestedEnumColorFilter {
    @Field(() => Color, {nullable:true})
    equals?: keyof typeof Color;
    @Field(() => [Color], {nullable:true})
    in?: Array<keyof typeof Color>;
    @Field(() => [Color], {nullable:true})
    notIn?: Array<keyof typeof Color>;
    @Field(() => NestedEnumColorFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumColorFilter>;
}

@InputType()
export class NestedEnumColorWithAggregatesFilter {
    @Field(() => Color, {nullable:true})
    equals?: keyof typeof Color;
    @Field(() => [Color], {nullable:true})
    in?: Array<keyof typeof Color>;
    @Field(() => [Color], {nullable:true})
    notIn?: Array<keyof typeof Color>;
    @Field(() => NestedEnumColorWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedEnumColorWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedEnumColorFilter, {nullable:true})
    _min?: InstanceType<typeof NestedEnumColorFilter>;
    @Field(() => NestedEnumColorFilter, {nullable:true})
    _max?: InstanceType<typeof NestedEnumColorFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedUuidFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => NestedUuidFilter, {nullable:true})
    not?: InstanceType<typeof NestedUuidFilter>;
}

@InputType()
export class NestedUuidWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => NestedUuidWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedUuidWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class UuidFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedUuidFilter, {nullable:true})
    not?: InstanceType<typeof NestedUuidFilter>;
}

@InputType()
export class UuidWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedUuidWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedUuidWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}
